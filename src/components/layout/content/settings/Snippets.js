import React from 'react';
import styled from 'styled-components';

import { getSetting, setBooleanSetting, setSetting } from 'utils/settings';

import Input from 'components/common/controls/Input';
import Checkbox from 'components/common/controls/Checkbox';

const StyledInput = styled(Input)`
  padding: 0 5px;
  width: 148px;
`;

const Field = styled.div`
  height: 35px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 10px;
`;

const Section = styled.div`
  width: 45%;
`;

const SnippetsSettings = () => (
  <div>
    <h4>Snippets settings:</h4>

    <Section>
      <Field>
        <Label>
          <span>Snippet cache (seconds):</span>
          <StyledInput type="number"
                       value={ getSetting('snippet-fetch-cache-in-seconds', 100) }
                       onChange={ (event) => setSetting('snippet-fetch-cache-in-seconds', event.target.value) }/>
        </Label>
      </Field>

      <Field>
        <Label>
          <span>Default new snippet is public:</span>
          <Checkbox checked={ getSetting('defaultNewIsPublic', false) }
                    onChange={ () => setBooleanSetting('defaultNewIsPublic') }/>
        </Label>
      </Field>
    </Section>
  </div>
);

export default SnippetsSettings;
