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
import { loadChart } from '../actions/ChartActions';

const chartMargin = {
  top: 20,
  right: 15,
  left: 15,
  bottom: 0
};

/**
 * Chart container, responsible for rendering the chart and it's control navs,
 * used to set the time range of the data retrieved from the IEX API
 */
const ChartView = (props) => {
  const {
    data,
    selectedRange,
    symbol,
    changeChartRange
  } = props;

  /**
   * Available chart data time ranges
   */
  const ranges = ['1d', '1m', '3m', '6m', 'ytd', '1y', '2y', '5y'];

  /**
   * Render the chart if data has been retrieved
   * @param {array} data - The chart dataset
   * @return {Object} - The Chart JSX Component
   */
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
          <XAxis height={40} tickMargin={10} minTickGap={20} dataKey="label" />
          <YAxis width={40} tickMargin={10} domain={['auto', 'auto']} />
          <Tooltip separator="" />
        </LineChart>
      );
    }
    return (<div />);
  };

  /**
   * Check if nav range is equal to the selected range
   * @param {string} range
   * @return {boolean}
   */
  const isCurrentRange = range => (selectedRange === range);

  /**
   * Render the avaliable ranges as navs
   * @return {boolean}
   * @return {array} - The Nav JSX Component array
   */
  const renderRangeNavs = () => ranges.map(item => (
    <Nav
      onClick={changeChartRange(symbol, item)}
      isActive={isCurrentRange(item)}
      key={`chartRangeNav${item}`}
    >
      {item.toUpperCase()}
    </Nav>
  ));

  return (
    <Grid>
      <ResponsiveContainer width="100%" height={200}>
        {renderChart(data)}
      </ResponsiveContainer>
      <Row justifyContent="center">
        {renderRangeNavs()}
      </Row>
    </Grid>
  );
};

ChartView.propTypes = {
  /**
   * Chart data retrieved from the IEX API
   */
  data: PropTypes.array.isRequired,
  /**
   * Data time interval
   */
  selectedRange: PropTypes.string,
  /**
   * Company symbol
   */
  symbol: PropTypes.string.isRequired,
  /**
   * Dispatch range changes to Redux, defined by mapDispatchToProps
   */
  changeChartRange: PropTypes.func.isRequired,
};

ChartView.defaultProps = {
  selectedRange: ''
};

const mapStateToProps = state => ({
  ...state.chart,
  symbol: state.company.symbol
});

const mapDispatchToProps = dispatch => ({
  changeChartRange: (symbol, range) => () => {
    dispatch(loadChart(symbol, range));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartView);
