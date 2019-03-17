import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Empty } from 'antd';
import GGChart from '@/components/Visualization/GGChart';

@connect(({ tchart }) => ({
  tchart,
}))
class VisualizationPanel extends PureComponent {
  render() {
    const { tchart, dispatch } = this.props;
    const { grammar, currentDataset } = tchart;
    const grammarUpdate = { ...grammar };
    if (!currentDataset) {
      return <Empty />;
    }
    const data = currentDataset.dataSource;
    return <GGChart grammar={grammarUpdate} data={data} />;
  }
}

export default VisualizationPanel;
