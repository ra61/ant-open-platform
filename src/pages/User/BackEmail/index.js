import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../style.less';

// import { Route, Redirect, Switch } from 'dva/router';
// import { getRoutes } from '@/utils/utils';

const { Step } = Steps;

export default class StepPhone extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { location, children } = this.props;
    return (
     
        <Card bordered={false} title="找回密码">
          <Fragment>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="确认身份" />
              <Step title="重置密码" />
              <Step title="完成" />
            </Steps>
            {children}
          </Fragment>
        </Card>
    );
  }
}
