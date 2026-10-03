import { CoursesOuter, CoursesInner, CoursesEyebrow, CoursesTitle, CoursesGrid, CourseCard, CourseIcon, CourseTitle, CourseText, CourseLink } from "./Courses.styles"

import general from "./images/general.jpg"
import business from "./images/business.jpg"
import exam from "./images/exam.jpg"
import kids from "./images/kids.jpg"


const courses = [
  {
    icon: general,
    title: "General English",
    text: "Improve your everyday English for work, travel, and life.",
    linkText: "Learn More →"
  },
  {
    icon: business,
    title: "Business English",
    text: "Communicate confidently in meetings, emails, and presentations.",
    linkText: "Learn More →"
  },
  {
    icon: exam,
    title: "Exam Preparation",
    text: "Prepare for IELTS, TOEFL, and other English exams.",
    linkText: "Learn More →"
  },
  {
    icon: kids,
    title: "Kids & Teens",
    text: "Fun and engaging English courses for young learners.",
    linkText: "Learn More →"
  }
]


const Courses = () => {
  return (
    <CoursesOuter>
      <CoursesInner>

        <CoursesEyebrow>OUR PROGRAMS</CoursesEyebrow>
        <CoursesTitle>Find the Right Course for You</CoursesTitle>

        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard key={course.title}>

              <CourseIcon
                src={course.icon}
                alt=""
              />

              <CourseTitle>
                {course.title}
              </CourseTitle>

              <CourseText>
                {course.text}
              </CourseText>

              <CourseLink href="#">
                {course.linkText}
              </CourseLink>

            </CourseCard>
          ))}
        </CoursesGrid>

      </CoursesInner>
    </CoursesOuter>
  )
}

export default Courses