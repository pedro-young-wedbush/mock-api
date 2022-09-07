export default function handler(req, res) {
	res.setHeader('Content-Type', 'application/json');
	  res.status(200).json(result)
  }

	const result = [
		{ 
			symbol: 'AMZN',
			cusip: '12345',
			company: 'Amazon',
			price: '$122.75',
			changeIn24Hrs: '-$3.45',
			shares: 80,
		},
		{ 
			symbol: 'NFLX',
			cusip: '12301',
			company: 'Netflix',
			price: '$3,345,645',
			changeIn24Hrs: '+$9.30',
			shares: 55,
		},
		{ 
			symbol: 'SHOP',
			cusip: '12302',
			company: 'Shopify',
			price: '$570',
			changeIn24Hrs: '+$25.14',
			shares: 22,
		},
		{ 
			symbol: 'DIA',
			cusip: '12303',
			company: 'SPDR Down Jones Industrial Average ETF Trust (DIA)',
			price: '$344',
			changeIn24Hrs: '-$25.45',
			shares: 2,
		},
		{ 
			symbol: 'TSLA',
			cusip: '12304',
			company: 'Tesla',
			price: '$1,004',
			changeIn24Hrs: '+$36.75',
			shares: 5,
		},
		{ 
			symbol: 'VOO',
			cusip: '12345',
			company: 'Vanguard ...',
			price: '$403',
			changeIn24Hrs: '-$4.59',
			shares: 24,
		},
	]