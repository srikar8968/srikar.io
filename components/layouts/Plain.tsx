import PageTransition from '../base/animation/PageTransition'

const PlainLayout = ({route, children }) => {
    return (
        <div className="plain-layout">
            <PageTransition show={route}>
                { children }
            </PageTransition>
        </div>
    )
}
export default PlainLayout