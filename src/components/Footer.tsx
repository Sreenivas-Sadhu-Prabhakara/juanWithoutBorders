export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800" role="contentinfo">
      <div className="container-max section-padding !py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white">Juan Without Borders</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Connecting talented individuals with disabilities to forward-thinking employers worldwide. Building inclusive workplaces, one opportunity at a time.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow us on ${social}`}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="text-xs font-bold text-slate-400 hover:text-white">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-3" role="list">
              {['Browse Opportunities', 'Create Profile', 'Career Resources', 'Skills Training', 'Mentorship Program'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-3" role="list">
              {['Post a Job', 'Talent Search', 'Accommodation Guide', 'Inclusion Training', 'Compliance Resources'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {['About Us', 'Our Mission', 'Blog', 'Contact', 'Accessibility Statement'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Juan Without Borders. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
