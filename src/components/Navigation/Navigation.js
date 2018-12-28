import React from 'react';
import {
	Navbar,
	Button,
	Alignment,
	FormGroup,
	InputGroup,
	NavbarGroup,
	Intent
} from '@blueprintjs/core';

export default function Navigation() {
	return (
		<div>
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Movie Nerd</Navbar.Heading>
					<Navbar.Divider />
					<Button className="bp3-minimal" icon="home" text="Home" />
					<Button className="bp3-minimal" icon="document" text="Files" />
				</Navbar.Group>
				<NavbarGroup align={Alignment.RIGHT}>
					<InputGroup placeholder="Search..." />
					<Button
						className="bp3-minimal"
						icon="search"
						text="Search"
						intent={Intent.PRIMARY}
					/>
				</NavbarGroup>
			</Navbar>
		</div>
	);
}
