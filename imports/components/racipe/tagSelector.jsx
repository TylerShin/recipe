import React from 'react';
import Chip from 'material-ui/Chip';

class TagSelector extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete(key) {
    console.log(key);
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <Chip
          key={1}
          onRequestDelete={() => { this.handleRequestDelete('1'); }}
          style={this.styles.chip}
        >
          하이욤
        </Chip>
      </div>
    );
  }
}

TagSelector.propTypes = {

};

export default TagSelector;
