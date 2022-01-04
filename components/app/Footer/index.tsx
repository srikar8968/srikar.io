import styles from './partials/Footer.module.css'
import Link from 'next/link'

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
                    <ul className={styles.appFooterCol1}>
                        <li><a href="https://github.com/srikar8968/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>

                        <li><a href="https://www.linkedin.com/in/srikar-panuganti-a60805156" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>

                        <li><a href="mailto:srikarpanuganti08@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li>
                    </ul>
                    <small className={styles.appFooterCol2}>© 2021 <a className="text-primary" href="https://github.com/srikar8968">Srikar</a>, Built with NextJS</small>
                </div>
            </div>
		</footer>
	)
}

export default Footer