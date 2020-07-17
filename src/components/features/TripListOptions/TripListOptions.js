import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.scss';

import {Row, Col} from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag, checked){
    if(checked) {
      this.props.addTag(tag);
      console.log('Adding tag', tag);
      // TODO - use action dispatcher from props
    } else {
      this.props.removeTag(tag);
      console.log('Removing tag', tag);
      // TODO - use action dispatcher from props
    }
  }

  handleDuration(type, value){
    console.log('Changing duration', type, value);
    // TODO - use action dispatcher from props
    if (type === 'from') {
      this.props.changeFromDuration(parseInt(value));
    } else {
      this.props.changeToDuration(parseInt(value));
    }
  }

  handleSearch(phrase){
    this.props.changeSearchPhrase(phrase);
  }

  handleRegion(regionName){
    console.log('Selected region:', regionName);
    this.props.selectRegion(regionName);
  }

  /*handleRegion(regionName, checked){
    if(checked) {
      this.props.addRegion(regionName);
      console.log('Adding region', regionName);
      // TODO - use action dispatcher from props
    } else {
      this.props.removeRegion(regionName);
      console.log('Removing region', regionName);
      // TODO - use action dispatcher from props
    }
  }*/

  render(){
    const {tags, filters, regions} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          {/*<Col lg={4}>*/}
          <Col lg={3}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max='14' onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min='1' max='14' onChange={event => this.handleDuration('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by regions</summary>
                <div className={styles.dropdown}>
                  {Object.keys(regions).map((regionName) => (
                    <label
                      key={regionName}
                      className={styles.option}
                      //onClick={() => this.handleRegion(regionName)}
                    >
                      <input type='checkbox' 
                        checked={filters.region.indexOf(regionName) > -1}
                        onChange={event => this.handleRegion(regionName, event.currentTarget.checked)} 
                      />  
                      {regionName}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
          {/*<Col lg={4}>*/}
          <Col lg={2}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  regions: PropTypes.object,
  tags: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  changeFromDuration: PropTypes.func,
  changeToDuration: PropTypes.func,
  selectRegion: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func,
  //addRegion: PropTypes.func,
  //removeRegion: PropTypes.func,
};

export default TripListOptions;
