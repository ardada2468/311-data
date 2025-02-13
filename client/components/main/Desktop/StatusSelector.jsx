import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRequestStatus } from '@reducers/filters';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
  },
}));

const StatusSelector = ({
  updateStatusFilter,
  requestStatus,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>Request Status</div>
      <ToggleButtonGroup className={classes.root}>
        <ToggleButton
          className={classes.button}
          selected={requestStatus.open}
          onClick={() => updateStatusFilter('open')}
          value="open"
          disableRipple
        >
          Open
        </ToggleButton>
        <ToggleButton
          className={classes.button}
          selected={requestStatus.closed}
          onClick={() => updateStatusFilter('closed')}
          value="closed"
          disableRipple
        >
          Closed
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

const mapStateToProps = state => ({
  requestStatus: state.filters.requestStatus,
});

const mapDispatchToProps = dispatch => ({
  updateStatusFilter: status => dispatch(updateRequestStatus(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusSelector);

StatusSelector.propTypes = {
  updateStatusFilter: PropTypes.func.isRequired,
  requestStatus: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    closed: PropTypes.bool.isRequired,
  }).isRequired,
};
