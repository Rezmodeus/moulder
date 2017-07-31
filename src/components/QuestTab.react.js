import React from 'react';
import {Button, Grid, Col, Row} from 'react-bootstrap';
export default function QuestTab({db}) {
	return (
		<div>
			quest tab component
			<Grid>
				<Row className="show-grid">
					<Col xs={12} md={8}>col test</Col>
					<Col xs={6} md={4}>
						<Button block bsStyle="primary" bsSize="xsmall" title="ok"
						        onClick={() => console.log('click')}>ok</Button>

					</Col>
				</Row>
			</Grid>
		</div>
	)
}

