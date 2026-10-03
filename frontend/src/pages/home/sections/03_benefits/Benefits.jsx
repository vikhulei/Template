import { BenefitsOuter, BenefitsInner, BenefitsContent, BenefitsEyebrow, BenefitsTitle, BenefitsGrid, BenefitItem, BenefitIcon, BenefitContent, BenefitTitle, BenefitText, StatsGrid, StatItem, StatIcon, StatNumber, StatLabel 
} from "./Benefits.styles"
import countries from "./images/countries.jpg"
import courses from "./images/courses.jpg"
import expert from "./images/expert.jpg"
import learners from "./images/learners.jpg"
import person from "./images/person.jpg"
import real from "./images/real.jpg"


const benefits = [
    {
        icon: person,
        title: "Personalized Learning",
        text: "Study at your own pace with courses tailored to your goals."
    },
    {
        icon: expert,
        title: "Expert Instructors",
        text: "Learn from certified teachers with real-world experience."
    },
    {
        icon: real,
        title: "Real Conversations",
        text: "Practice speaking through interactive exercises and live sessions."
    },
    {
        icon: courses,
        title: "Track Your Progress",
        text: "Get detailed feedback and improve every day."
    }
]


const stats = [
    {
        icon: learners,
        number: "10,000+",
        label: "Active Learners"
    },
    {
        icon: expert,
        number: "1,500+",
        label: "Expert Tutors"
    },
    {
        icon: courses,
        number: "2,000+",
        label: "Courses Completed"
    },
    {
        icon: countries,
        number: "120+",
        label: "Countries Reached"
    }
]


const Benefits = () => {
    return (
        <BenefitsOuter>
            <BenefitsInner>

                <BenefitsContent>
                    <BenefitsEyebrow>
                        WHY LEARN WITH US
                    </BenefitsEyebrow>

                    <BenefitsTitle>
                        Designed for Results.<br />
                        Built Around You.
                    </BenefitsTitle>

                    <BenefitsGrid>
                        {benefits.map((benefit, index) => (
                            <BenefitItem key={index}>
                                <BenefitIcon src={benefit.icon} />

                                <BenefitContent>
                                    <BenefitTitle>
                                        {benefit.title}
                                    </BenefitTitle>

                                    <BenefitText>
                                        {benefit.text}
                                    </BenefitText>
                                </BenefitContent>
                            </BenefitItem>
                        ))}
                    </BenefitsGrid>
                </BenefitsContent>


                <StatsGrid>
                    {stats.map((stat, index) => (
                        <StatItem key={index}>
                            <StatIcon src={stat.icon} />
                            <StatNumber>{stat.number}</StatNumber>
                            <StatLabel>{stat.label}</StatLabel>
                        </StatItem>
                    ))}
                </StatsGrid>

            </BenefitsInner>
        </BenefitsOuter>
    )
}

export default Benefits