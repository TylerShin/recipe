import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class RecipeForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="racipe-form-component">
        <form>
          <div className="recipeName-wrapper">
            <label>레시피 이름</label>
            <input type="text" placeholder="레시피 이름" />
          </div>
          <div>
            <label>분류</label>
            <input type="text" placeholder="레시피 분류" />
          </div>
        </form>
      </div>
    );
  }
}

// RecipeForm.propTypes = {
//
// };

export default RecipeForm;
