import React from 'react';
import { Table, Accordion } from 'react-bootstrap';

import './LatestInfo.css';

class LatestInfo extends React.Component {
  render() {
    return(
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as="h2" variant="link" eventKey="0">
          Latest on {this.props.price.symbol}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Table className='latest-info'>
            <tbody>
              <tr>
                <td>Price USD</td>
                <td>${this.props.price.quoteUsd.price.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Coin Market Cap Rank</td>
                <td># {this.props.price.cmcRank}</td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td>${this.props.price.quoteUsd.marketCap.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total Supply</td>
                <td>{this.props.price.totalSupply.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Circulating Supply</td>
                <td>{this.props.price.circulatingSupply.toFixed(2)}</td>
              </tr>
              <tr>
                <td>24h Volume</td>
                <td>{this.props.price.quoteUsd.volume24h.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}

export default LatestInfo;