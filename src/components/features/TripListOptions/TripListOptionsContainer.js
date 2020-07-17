import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
//import {getAllFilters, changeSearchPhrase} from '../../../redux/filtersRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeFromDuration,
  changeToDuration,
  selectRegion,
  addTag,
  removeTag,
  //addRegion,
  //removeRegion,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeFromDuration: value => dispatch(changeFromDuration(value)),
  changeToDuration: value => dispatch(changeToDuration(value)),
  selectRegion: value => dispatch(selectRegion(value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  //addRegion: regionName => dispatch(addRegion(regionName)),
  //removeRegion: regionName => dispatch(removeRegion(regionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
