// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const ServerInfoCard = ({ selectedServer }) => {
	// ** render user img
	// console.log(seletecUser)
	const renderUserImg = () => {
		if (selectedServer !== null && selectedServer.avatar) {
			return <img src={selectedServer.avatar} alt="user-avatar" className="img-fluid rounded" height="104" width="104" />
		} else {
			const stateNum = Math.floor(Math.random() * 6),
				states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
				color = states[stateNum]
			return (
				<Avatar
					initials
					color={color}
					className="rounded"
					content={selectedServer.fullName}
					contentStyles={{
						borderRadius: 0,
						fontSize: 'calc(36px)',
						width: '100%',
						height: '100%',
					}}
					style={{
						height: '90px',
						width: '90px',
					}}
				/>
			)
		}
	}

	return (
		<Card>
			<CardBody>
				<Row>
					<Col xl="6" lg="12" className="d-flex flex-column justify-content-between border-container-lg">
						<div className="user-avatar-section">
							<div className="d-flex justify-content-start">
								{renderUserImg()}
								<div className="d-flex flex-column ml-1">
									<div className="user-info mt-2">
										<h4 className="mb-0">{selectedServer !== null ? selectedServer.fullName : 'User'}</h4>
										<CardText tag="span">{selectedServer !== null ? selectedServer.phone : ''}</CardText>
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col xl="6" lg="12" className="mt-2 mt-xl-0">
						<div className="user-info-wrapper">
							<div className="d-flex flex-wrap align-items-center">
								<div className="user-info-title">
									<User className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										ID
									</CardText>
								</div>
								<CardText className="mb-0">{selectedServer !== null ? selectedServer.id : ''}</CardText>
							</div>
							<div className="d-flex flex-wrap align-items-center my-50">
								<div className="user-info-title">
									<Check className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Status
									</CardText>
								</div>
								<CardText className="text-capitalize mb-0">{selectedServer !== null ? selectedServer.status : 'Active'}</CardText>
							</div>
							<div className="d-flex flex-wrap align-items-center">
								<div className="user-info-title">
									<Phone className="mr-1" size={14} />
									<CardText tag="span" className="user-info-title font-weight-bold mb-0">
										Contact
									</CardText>
								</div>
								<CardText className="mb-0">{selectedServer !== null ? selectedServer.phone : '(123) 456-7890'}</CardText>
							</div>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}

export default ServerInfoCard
