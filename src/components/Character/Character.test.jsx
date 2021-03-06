import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character.jsx';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character 
      name="Dana Scully"
      image="https://vignette.wikia.nocookie.net/x-files/images/3/31/TXF_Scully.jpg/revision/latest/scale-to-width-down/310?cb=20171214040235"
      occupation="FBI Agent"
      description="Dana Katherine Scully (Played by Gillian Anderson) is an FBI Special Agent and medical doctor with a background in hard science who brought her scientific expertise and perspective to the X-files.  In 2002, she went on the run from the law with her former partner, Fox Mulder. She was employed as a doctor at Our Lady of Sorrows Hospital by 2008, at which time she became involved in an FBI case on which Mulder worked in an unofficial capacity. (The X-Files: I Want to Believe) In 2016 she returned to the FBI along with Mulder and together they reopened the X-files and resumed their investigations into them whilst also continuing her duties as a doctor at the hospital."
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
