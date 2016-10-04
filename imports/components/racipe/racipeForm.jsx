import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TagSelector from './tagSelector';

class RecipeForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const styles = {
      radioButton: {
        dispaly: 'inline-block',
        verticalAlign: 'top',
        marginLeft: '16px',
      },
    };

    return (
      <div className="racipe-form-component">
        <div className="container">
          <form>
            <div className="recipeName-wrapper">
              <TextField
                floatingLabelText="Racipe Name"
              />
            </div>
            <div className="tag-selector-wrapper">
              <div className="tag-selector-label">
                Select Tags
              </div>
              <TagSelector />
            </div>
            <div className="private-select">
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                  value="private"
                  label="Private"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="public"
                  label="Public"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// RecipeForm.propTypes = {
//
// };

export default RecipeForm;
