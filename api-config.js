module.exports = {
	token:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZTE0NTRhYzgtMGFhOC00MDgzLTljZmYtNzRjMGU0NzBiYzJhIn0.xZDmGaYylo1t7p7pGFS2gmsHqbKfjKfJEuO4i1NhX9E',
	url: 'https://api-euwest.graphcms.com/v1/cjrlstj4p1shh01ht999s1oqe/master',
	query: `{
		details {
			id
			headline
			mission
			vision
			bannerImage {
			id
			url
			}
		}
		values {
			id
			value
			icon
		}
		milestones {
			id
			year
			description
		}
		projects {
			id
			title
			description
			image {
			id
			url
			fileName
			}
		}
		areas {
			id
			state
			cities
		}
		maps {
			id
			mapImage {
				id
				url
			}
		}
		impacts {
			id
			impact
		}
		donations {
			id
			message
			image1 {
				id
				url
			}
			image2 {
				id
				url
			}
			image3 {
				id
				url
			}
		}
		contacts {
			id
			address
			email
			phone
		}
	}`
};
