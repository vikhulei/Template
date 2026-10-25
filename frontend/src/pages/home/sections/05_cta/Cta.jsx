import { CTAOuter, CTAInner, CTALeft, CTAIcon, CTATextStack, CTATitle, CTAHighlight, CTAText, CTARight } from "./Cta.styles";

import MainButton from "../../../../components/ui/button/MainButton";

import rocket from "./images/rocket_new.png";


const CTA = () => {
    return (
        <CTAOuter>
            <CTAInner>

                <CTALeft>
                    <CTAIcon src={rocket} alt="" />

                    <CTATextStack>
                        <CTATitle>
                            Ready to <CTAHighlight>Start</CTAHighlight> Your{" "}
                            <CTAHighlight>Journey?</CTAHighlight>
                        </CTATitle>

                        <CTAText>
                            Join thousands of learners who are improving their
                            English skills and achieving their goals every day.
                        </CTAText>
                    </CTATextStack>
                </CTALeft>

                <CTARight>
                    <MainButton>
                        Get Started for Free →
                    </MainButton>
                </CTARight>

            </CTAInner>
        </CTAOuter>
    );
};

export default CTA;