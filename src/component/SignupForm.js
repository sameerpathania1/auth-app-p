import React from "react";
import { Col, Form, Button, Container } from 'react-bootstrap';
import { countriesList } from '../constants';
import classNames from 'classnames';

const SignupForm = (props) => {
	const { user = {}, errors = {}, address = {}, onChange, onSubmit, onCancel, goto } = props;

	return <Container fluid>
		<Col style={{ backgroundColor: "white", marginTop: "20px", paddingTop: "10px", borderRadius: "6px" }} xs={12} sm={4} md={{ span: 4, offset: 4 }}>
			<Form onSubmit={onSubmit}>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>First Name</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.fil })} type="text" name="firstName" value={user.firstName} onChange={onChange("user")} />
						{errors && errors.firstName && <p className="error">{errors.firstName}</p>}
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Last Name</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.lastName })} type="text" name="lastName" value={user.lastName} onChange={onChange("user")} />
						{errors && errors.lastName && <p className="error">{errors.lastName}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Email</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.email })} type="text" name="email" value={user.email} onChange={onChange("user")} />
						{errors && errors.email && <p className="error">{errors.email}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Phone</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.phone })} type="text" name="phone" value={user.phone} onChange={onChange("user")} />
						{errors && errors.phone && <p className="error">{errors.phone}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Password</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.password })} type="password" name="password" value={user.password} onChange={onChange("user")} />
						{errors && errors.password && <p className="error">{errors.password}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control className={classNames({ error: errors && errors.confirmPassword })} type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChange("user")} />
						{errors && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress2">
					<Form.Label>Address</Form.Label>
					<Form.Control value={address.address} type="text" name="address" onChange={onChange("address")} />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>City</Form.Label>
						<Form.Control value={address.city} type="text" name="city" onChange={onChange("address")} />
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>State</Form.Label>
						<Form.Control value={address.state} name="state" onChange={onChange("address")} />
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Pin</Form.Label>
						<Form.Control value={address.zipCode} type="number" name="zipCode" onChange={onChange("address")} />

					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Country</Form.Label>
						<Form.Control as="select" value={address.country} name="country" onChange={onChange("address")}>
							<option value="">Select</option>
							{countriesList.map(i => <option value={i.value} key={i.value}>{i.label}</option>)}
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Row style={{ marginTop: 25 }}>
					<Form.Group as={Col}>
						<Button variant="success" type="submit" block>Submit</Button>
					</Form.Group>
					<Form.Group as={Col}>
						<Button variant="secondary" type="submit" block onClick={"onCancel"}>Cancel</Button>
					</Form.Group>
				</Form.Row>

				<Form.Row style={{ marginTop: 15 }}>
					<Form.Group as={Col} style={{ textAlign: 'right' }}>
						<p>Already have an Id? <Button variant="success" type="submit" onClick={() => goto('/login')}>Login</Button></p>
					</Form.Group>
				</Form.Row>
			</Form>
		</Col>

	</Container >
};

export default SignupForm;

/* SignupForm.prototype = {
	user: PropTypes.object,
	errors: PropTypes.object,
	address: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func,
	goto: PropTypes.func,
} */