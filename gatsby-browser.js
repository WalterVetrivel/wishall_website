import './src/styles/global.css';
import './src/styles/landing.css';
import './src/styles/navbar.css';
import './src/styles/intro.css';
import './src/styles/journey.css';
import './src/styles/projects.css';
import './src/styles/area.css';
import './src/styles/impact.css';
import './src/styles/actions.css';
import './src/styles/donation.css';
import './src/styles/footer.css';
import './src/styles/modal.css';
import './src/styles/form.css';
import './src/styles/spinner.css';
import './src/styles/media.css';

import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll(
	'.navbar__link, .navbar__cta__link, .main__cta a',
	{
		offset: 90
	}
);
