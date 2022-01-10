import styles from './partials/Footer.module.css'
import Link from 'next/link'
import SocialPanel from '@/components/app/SocialPanel'

const Footer = ({...props}: {[x: string]: any}) => {
	return (
		<footer className={styles.appFooter}>
      <div className="container">
        <section className={styles.reachMeSection}>
          <h2 className="title-lg txt-primary">Reach me</h2>
          <p>I am currently seeking new opportunities, feel free to mail me.Whether you want to hire me, ask a question or just say hello, I'll get back to you as soon as I can.</p>
          <Link href="mailto:srikarpanuganti08@gmail.com">
            <a className="txt-primary">{ `< reach me now />` }</a>
          </Link>
        </section>
      </div>
			<div className="container">
                <div className={styles.appFooterInner}>
                    <SocialPanel />
                    <small className={styles.appFooterCol2}>© 2021 <a className="text-primary" href="https://github.com/srikar8968">Srikar</a>, Built with NextJS</small>
                </div>
            </div>
		</footer>
	)
}

export default Footer