function Footer() {
  return (
    <footer
      className="max-w-4xl m-auto p-10 flex items-center"
      role="contentinfo"
    >
      <div className="flex gap-2 items-center">
        <img className="w-6 h-6" src="/github-mark-white.png" />
        <p className="text-xs dark:text-gray-500 text-gray-600">
          © 2025 GitHub, Inc.
        </p>
      </div>
      <nav>
        <ul className="flex items-center text-xs gap-2 dark:text-gray-500 text-gray-600">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>Docs</li>
          <li>Contact</li>
          <li>Manage cookies</li>
          <li>Do not share my personal information</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
