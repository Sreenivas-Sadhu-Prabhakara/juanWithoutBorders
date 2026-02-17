import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role } = await request.json()

    // Validate input
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      }
    })

    // Send verification email
    const verificationToken = Math.random().toString(36).substring(2, 15)
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      }
    })

    await resend.emails.send({
      from: 'Juan Without Borders <noreply@juanwithoutborders.com>',
      to: email,
      subject: 'Verify your email',
      html: `
        <h1>Welcome to Juan Without Borders!</h1>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${process.env.NEXTAUTH_URL}/auth/verify?token=${verificationToken}">Verify Email</a>
      `
    })

    return NextResponse.json({ message: 'User created successfully. Please check your email to verify your account.' })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
