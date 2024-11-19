// Navigation.jsx
import clsx from 'clsx'
import { useState } from 'react'

function CloseIcon(props) {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
			<path
				d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function ChevronDownIcon(props) {
	return (
		<svg viewBox='0 0 8 6' aria-hidden='true' {...props}>
			<path
				d='M1.75 1.75 4 4.25l2.25-2.5'
				fill='none'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function MobileNavItem({ href, children }) {
	return (
		<li>
			<a href={href} className='block py-2 text-zinc-800 dark:text-zinc-300'>
				{children}
			</a>
		</li>
	)
}

export function MobileNavigation({ className, currentPath }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={className}>
			<button
				onClick={() => setIsOpen(true)}
				className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
			>
				Menu
				<ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
			</button>

			{isOpen && (
				<>
					<div
						className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80'
						onClick={() => setIsOpen(false)}
					/>
					<div className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
						<div className='flex flex-row-reverse items-center justify-between'>
							<button onClick={() => setIsOpen(false)} aria-label='Close menu' className='-m-1 p-1'>
								<CloseIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
							</button>
							<h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>Navigation</h2>
						</div>
						<nav className='mt-6'>
							<ul className='-my-2 divide-y divide-zinc-100 text-base  dark:divide-zinc-100/5 text-zinc-800 dark:text-zinc-300'>
								<MobileNavItem href='/about'>About</MobileNavItem>
								<MobileNavItem href='/blog'>Articles</MobileNavItem>
								<MobileNavItem href='/projects'>Projects</MobileNavItem>
								<MobileNavItem href='/resume'>Resume</MobileNavItem>
							</ul>
						</nav>
					</div>
				</>
			)}
		</div>
	)
}

function NavItem({ href, children, isActive }) {
	return (
		<li>
			<a
				href={href}
				className={clsx(
					'relative block px-3 py-2 transition',
					isActive
						? 'text-teal-500 dark:text-teal-400'
						: 'hover:text-teal-500 dark:hover:text-teal-400'
				)}
			>
				{children}
				{isActive && (
					<span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
				)}
			</a>
		</li>
	)
}

export function DesktopNavigation({ className, currentPath }) {
	return (
		<nav className={className}>
			<ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
				<NavItem href='/about' isActive={currentPath === '/about'}>
					About
				</NavItem>
				<NavItem href='/blog' isActive={currentPath === '/blog'}>
					Articles
				</NavItem>
				<NavItem href='/projects' isActive={currentPath === '/projects'}>
					Projects
				</NavItem>
				<NavItem href='/resume' isActive={currentPath === '/resume'}>
					Resume
				</NavItem>
			</ul>
		</nav>
	)
}
