import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="row newsletter mx-5 mt-5 mb-3">
					<div className="col-md">
						<p className="h6">Sign up for our newsletter</p>
						<form className="ml-2">
							<div className="form-group form-inline">
								<label for="exampleInputEmail1" className="mr-2">
									Email address
								</label>
								<input
									type="email"
									className="form-control w-75"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>

							<button type="submit" className="btn btn-info btn-sm">
								Submit
							</button>
						</form>
					</div>
					<div className="col-md text-right">
						<p className="h6">Follow us on</p>
						<div className="share-icons mr-2">
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-twitter-64.png"
								width="36"
								alt="Twitter icon"
							/>
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-facebook-64.png"
								width="36"
								alt="Facebook icon"
							/>
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-instagram-64.png"
								width="36"
								alt="Instagram icon"
							/>
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-youtube-squared-64.png"
								width="36"
								alt="Youtube icon"
							/>
							<img
								src="https://raw.githubusercontent.com/jsmileydev/shoestore/master/Images/icons8-share-64.png"
								width="36"
								alt="Share icon"
							/>
						</div>
					</div>
				</div>
				<div className="bg-dark border-dark">
					<div className="image-links bg-dark border-dark text-right">
						<p className="my-0">
							<small>
								<a href="https://icons8.com/" className="text-white">
									Icons by Icons8
								</a>
							</small>
						</p>
						<p className="my-0">
							<small>
								<a href="https://pixabay.com/" className="text-white">
									Images from Pixabay
								</a>
							</small>
						</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;