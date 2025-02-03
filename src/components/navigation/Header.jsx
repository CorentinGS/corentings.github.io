import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
	Bars3Icon,
	ChatBubbleBottomCenterIcon,
	CodeBracketIcon,
	DocumentTextIcon,
	FingerPrintIcon,
	HomeIcon,
	UserCircleIcon,
	XMarkIcon
} from '@heroicons/react/24/outline'

const mainNavigation = [
	{ name: 'About', href: '/about', icon: UserCircleIcon },
	{ name: 'Blog', href: '/blog', icon: DocumentTextIcon },
	{ name: 'Projects', href: '/projects', icon: CodeBracketIcon },
	{ name: 'Resume', href: '/resume', icon: FingerPrintIcon }
]

const socialLinks = [
	{ name: 'GitHub', href: 'https://github.com/CorentinGS', icon: 'github' }
	// Add more social links as needed
]

const callsToAction = [
	{ name: 'Check my Github', href: 'https://github.com/corentings', icon: CodeBracketIcon },
	{ name: 'Join my Discord', href: '/discord', icon: ChatBubbleBottomCenterIcon }
]

export function Header({ currentPath }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 bg-white/80 backdrop-blur-xs dark:bg-zinc-900/80'>
			<nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
				{/* Brand */}
				<div className='flex lg:flex-1'>
					<a href='/' className='flex items-center gap-x-2'>
						<HomeIcon className='h-6 w-6 text-teal-500 dark:text-teal-400' />
						<span className='text-xl font-bold text-zinc-900 dark:text-zinc-100'>CorentinGS</span>
					</a>
				</div>

				{/* Mobile menu button */}
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200'
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>

				{/* Desktop navigation */}
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					{mainNavigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`text-sm font-semibold leading-6 ${
								currentPath === item.href
									? 'text-teal-500 dark:text-teal-400'
									: 'text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400'
							}`}
						>
							{item.name}
						</a>
					))}
				</Popover.Group>

				{/* Social links */}
				<div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6'>
					{socialLinks.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='sr-only'>{item.name}</span>
							{/* Use your preferred icon library for social icons */}
							{item.icon === 'github' ? (
								<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
									<path
										fillRule='evenodd'
										d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
										clipRule='evenodd'
									/>
								</svg>
							) : null}
						</a>
					))}
				</div>
			</nav>

			{/* Mobile menu */}
			<Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-50' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-zinc-900'>
					<div className='flex items-center justify-between'>
						<a href='/' className='flex items-center gap-x-2'>
							<HomeIcon className='h-6 w-6 text-teal-500 dark:text-teal-400' />
							<span className='text-xl font-bold text-zinc-900 dark:text-zinc-100'>CorentinGS</span>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{mainNavigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-zinc-800'
									>
										<div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-zinc-800 dark:group-hover:bg-zinc-700'>
											<item.icon
												className='h-6 w-6 text-gray-600 group-hover:text-teal-600 dark:text-gray-400 dark:group-hover:text-teal-400'
												aria-hidden='true'
											/>
										</div>
										{item.name}
									</a>
								))}
							</div>
							<div className='py-6'>
								{callsToAction.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-zinc-800'
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}

export default Header
