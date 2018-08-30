import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {
  Grid,
  Row,
  Nav
} from '../components';
import { colors } from '../providers/styles';

const chartMargin = {
  top: 20,
  right: 15,
  left: 15,
  bottom: 0
};

const ChartView = (props) => {
  const {
    data,
    selectedRange
  } = props;

  const renderChart = (data) => {
    if (data.length > 0) {
      return (
        <LineChart margin={chartMargin} data={data}>
          <Line
            type="monotone"
            dot={false}
            name=" "
            dataKey="close"
            stroke={colors.secondary}
          />
          <XAxis minTickGap={20} dataKey="label" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip separator="" />
        </LineChart>
      );
    }
    return (<div />);
  };

  return (
    <Grid>
      <ResponsiveContainer width="100%" height={200}>
        {renderChart(data)}
      </ResponsiveContainer>
      <Row>
        <Nav isActive={selectedRange === '1d'}>1D</Nav>
        <Nav isActive={selectedRange === '1m'}>1M</Nav>
        <Nav isActive={selectedRange === '3m'}>3M</Nav>
        <Nav isActive={selectedRange === '6m'}>6M</Nav>
        <Nav isActive={selectedRange === 'ytd'}>YTD</Nav>
        <Nav isActive={selectedRange === '1y'}>1Y</Nav>
        <Nav isActive={selectedRange === '2y'}>2Y</Nav>
        <Nav isActive={selectedRange === '5y'}>5Y</Nav>
      </Row>
    </Grid>
  );
};

ChartView.propTypes = {
  data: PropTypes.array.isRequired,
  selectedRange: PropTypes.string
};

ChartView.defaultProps = {
  selectedRange: ''
};

const mapStateToProps = state => ({
  ...state.chart
});

export default connect(mapStateToProps)(ChartView);
