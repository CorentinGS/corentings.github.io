import clsx from 'clsx'

import { getImage } from 'astro/assets'
import imgAvatar from '../../assets/avatar.webp'
const avatar = await getImage({
	src: imgAvatar,
	alt: 'Avatar',
	format: 'webp',
	width: 200,
	height: 200
})

export function AvatarContainer({ className, ...props }) {
	return (
		<div
			className={clsx(
				className,
				'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
			)}
			{...props}
		/>
	)
}

export function Avatar({ large = false, className, ...props }) {
	return (
		<a href='/' aria-label='Home' className={clsx(className, 'pointer-events-auto')} {...props}>
			<img
				src={avatar.src} // Make sure to place your avatar image in the public folder
				alt=''
				sizes={large ? '4rem' : '2.25rem'}
				className={clsx(
					'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
					large ? 'h-16 w-16' : 'h-9 w-9'
				)}
			/>
		</a>
	)
}
