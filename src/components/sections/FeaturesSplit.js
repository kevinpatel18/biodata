import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}




const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'BIO DATA',
    paragraph: 'Dr. Viraj Kanubhai Patel'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" style={{ color: 'orange' }}>
                  PERSONAL INFORMATION
                </h3>
                <p className="m-0" style={{ color: 'white' , textAlign:'left' }}>
                  NAME : &nbsp; Dr. Viraj Kanubhai Patel<br /><br />
                  DATE OF BIRTH :&nbsp; 24TH March 1996<br /><br />
                  BIRTH PLACE : &nbsp; Vadodara , Gujarat<br /><br />
                  HEIGHT: &nbsp; 5’ 6”<br /><br />
                  WEIGHT : &nbsp;  65 KG<br /><br />
                  QULIFICATION: &nbsp;  BHMS (Bachelor OF Homoeopathic Medicine & Surgery)<br /> <br />
                  HOBBIE :  &nbsp; Music, Cricket, Reading<br /><br />
                  OCCUPATION :&nbsp;   Doctor<br /><br />
                  NATIVE :&nbsp;   AT Maretha, Post Maneja, Vadodara 390013 <br /><br />
                  ADDRESS : &nbsp;  A/9 Bhaktinagar Socitey, Nr. New Era School, Makarpura
                  Vadodara, 390010<br />


                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/WWOAE6918.JPG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" style={{ color: 'orange' }}>
                  FAMILY BACKGROUND
                </h3>
                <p className="m-0" style={{ color: 'white' , textAlign:'left'}}>
                  FATHER:&nbsp; Kanubhai Gordhanbhai Patel <br /><br />
                  OCCUPATION:&nbsp; Business <br /><br />
                  MOTHER :&nbsp; Ansuyaben Kanubhai Patel <br /><br />
                  OCCUPATION :&nbsp; Housewife <br /><br />
                  BROTHER&nbsp;  Kevin Kanubhai Patel <br /><br />
                  OCCUPATION :&nbsp; Study <br /><br />
                  MOSAL :&nbsp; Rasulabad <br /><br />
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/IMG_5512.JPG')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;