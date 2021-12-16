import styled from 'styled-components'
import Gallery from '@/components/app/Gallery'
import PostContainer from '@/components/base/PostContainer'
import WorkType from '@/types/work'
import ProjectType from '@/types/project'

const Wrapper = styled.div`
	padding: 1rem 0;
	& h1 {
		font-size: ${({theme}) => theme.fontSize.xl5[0]};
		text-align: center;
		font-weight: 200;
		margin-bottom: 2rem;
	}
	& h2{
		margin-bottom: 1.5rem;
		font-size: ${({theme}) => theme.fontSize.xl2[0]};
	}
`

type Props = {
	work: WorkType[],
	projects: ProjectType[]
};

const Work = ({work, projects}: Props) => {
	return (
		<Wrapper>
			<div className="container">
				<h1>My Work</h1>
				<Gallery items={work} />
			</div>
			<PostContainer my="2rem">
				<h2 className="text-light">Some of my personal projects&nbsp;&nbsp;: : : : : :</h2>
				<nav>
					{ projects.map((item, index) => (
						<a className="flex items-center pt pb mt mb w-full" href={item.url} target="_blank" key={index}>
							<div className="mr">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
							</div>
							<div className="pl ml">
								<span className="semibold block">{item.name}</span>
								<small>{item.url}</small><small>{item.inDev ? ' | in development' : null}</small>
							</div>
						</a>
					)) }
					<br/>
					<a className="block w-full text-center pt pb border rounded" target="_blank" href="https://github.com/srikar8968?tab=repositories">view all my repositories</a>
				</nav>
			</PostContainer>
		</Wrapper>
	)
}

export default Work

export const getStaticProps = async () => {
	const work = [
		{
			name: 'ResearchData 24',
			url: 'https://www.researchdata24.com/',
			logo: 'researchdata24-logo.png',
			screens: ['researchdata24.png', 'researchdata24-mobile.png'],
			description: 'Researchdata24 is a communication site with press releases uploaded most often. It provides detailed summary of important news related to the market in all the business industries.'
		},
		{
			name: 'Stratistics MRC',
			url: 'https://www.strategymrc.com/',
			logo: 'smrc-logo.png',
			screens: ['smrc.png', 'smrc-mobile.png'],
			description: 'It offer\'s a wide spectrum of research and consulting services with in-depth knowledge of different industries.'
		},
		{
			name: 'Accuray Research',
			url: 'https://www.accurayresearch.com/',
			logo: 'accuray-logo.png',
			screens: ['accuray.png', 'accuray-mobile.png'],
			description: 'Accuray Research provides a comprehensive understanding about the market trends, strategic insights, technological advancements, emerging markets and the opportunities.'
		}
	];
	const projects = [
		{
			name: 'srikar.io',
			url: 'https://srikar-io-srikar8968.vercel.app/writings',
			inDev: true
		},
		{
			name: 'Seiko Dev Community',
			url: 'https://github.com/srikar8968/seiko',
			inDev: true
		},
		{
			name: 'social-app',
			url: 'https://github.com/srikar8968/social-app',
			inDev: true
		},
		{
			name: 'Gkeep',
			url: 'https://srikar8968.github.io/Gkeep/',
			inDev: false
		},
		{
			name: 'Global Covid Tracker',
			url: 'https://srikar8968.github.io/Covidtracker/',
			inDev: false
		}
	];

  	return {
    	props: { 
    		work,
    		projects 
    	}
  	}
}