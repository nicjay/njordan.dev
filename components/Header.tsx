import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`text-md border-purple-700 px-4 py-2 hover:bg-slate-200 dark:border-orange-400 hover:dark:bg-slate-800 ${
        isActive
          ? 'border-b-2 font-semibold text-slate-900 dark:text-slate-50'
          : 'text-slate-600 dark:text-slate-300'
      }`}
    >
      {text}
    </Link>
  );
}

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between">
      <Link href="/" className="group flex items-center gap-3">
        <svg className="h-11 w-11 rounded-lg dark:fill-white" viewBox="0 0 512 512">
          <g transform="translate(0 512) scale(.1 -.1)">
            <path d="m415 5110c-183-38-330-170-391-350-18-53-19-134-19-2200s1-2147 19-2200c52-154 168-274 322-332l59-23h2155 2155l59 23c154 58 270 178 322 332 18 53 19 134 19 2200s-1 2147-19 2200c-52 154-168 274-322 332l-59 23-2130 1c-1172 1-2148-2-2170-6zm1027-1953c290-485 574-970 632-1077l106-195v1078 1077h230 230v-1460-1460h-244-244l-525 878c-288 482-573 967-633 1077l-109 200-3-1077-2-1078h-225-225v1460 1460h243 242l527-883zm3258-187c0-701-4-1104-11-1168-39-352-251-602-589-694-75-20-107-23-270-23-162 0-195 3-264 23-235 68-427 243-515 472-30 77-68 226-60 234 2 2 97 26 211 53l207 49 16-67c37-150 125-274 228-320 46-21 67-24 182-24 122 0 134 2 193 29 96 44 152 117 189 243 15 52 17 148 21 951l3 892h-480-481v210 210h710 710v-1070z" />
          </g>
        </svg>
        <div className="text-lg font-semibold text-slate-900 group-hover:text-purple-700 dark:text-slate-50 dark:group-hover:text-orange-400">
          Next.js User
        </div>
      </Link>
      <nav className="flex items-center gap-3">
        <div>
          <NavItem href="/posts" text="POSTS" />
          <NavItem href="/stats" text="STATS" />
          <NavItem href="/about" text="ABOUT" />
        </div>
        <ThemeSwitch />
      </nav>
    </div>
  );
}
