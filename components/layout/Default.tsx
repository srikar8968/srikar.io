import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
import MobileNav from '@/components/app/MobileNav'
import { ReactNode } from 'react'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="app-def-layout">
			<Header />

			<div className="app-content">
				{ children }
			</div>

			<Footer />
			<MobileNav />
		</div>
	)
}

export default DefaultLayout