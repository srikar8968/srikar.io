import PostContainer from '../components/base/PostContainer'
import PageHeader from '../components/base/PageHeader'

const About = () => {
    return (
        <div className="pb mb">
            <div className="container text-center">
                <PostContainer pd="1rem 0">
                    <PageHeader 
                    title="Hey, I'm Srikar" 
                    description="I'm a full-stack web developer and designer, living in India
                    who love's building digital website" />
                    <div className="pt mt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam non sapien porta aliquam non sit amet elit. Donec faucibus enim sed tellus tincidunt, eu vestibulum leo iaculis. Nunc porttitor ornare pellentesque. Nam malesuada, arcu efficitur faucibus mollis, orci ipsum vestibulum eros, et viverra libero ipsum in odio. Morbi sollicitudin quam in dui posuere mollis. Sed nec velit et mauris egestas ultricies. Curabitur pretium felis in massa maximus euismod. Donec vel orci bibendum, placerat orci eget, molestie metus. Aenean porttitor purus at orci cursus ultricies.
                    <br/>
                    Cras lacus dolor, pretium ut justo sit amet, lobortis sollicitudin sapien. Curabitur pretium vestibulum nibh, ut ornare lorem mattis ut. Aenean in accumsan lectus, nec vehicula tellus. Vivamus fermentum aliquet libero, vel interdum lectus bibendum a. Curabitur purus nibh, pretium a massa eu, mollis dictum dolor. Cras in egestas nunc. Donec vulputate turpis eu nisl ornare egestas.
                    </div>
                </PostContainer>
            </div>
        </div>
    )
}

export default About


