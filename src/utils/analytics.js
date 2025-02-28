import * as XLSX from 'xlsx';

export const exportData = () => {
	const data = JSON.parse(localStorage.getItem('pageMetrics') || '{}');

	if (!data || !data.sessions || Object.keys(data.sessions).length === 0) {
		console.warn('No data available for export.');
		return;
	}

	const rows = [];

	// Convert JSON to a structured array for Excel
	Object.entries(data.sessions).forEach(([sessionId, sessionData]) => {
		Object.entries(sessionData.brands || {}).forEach(([brand, brandData]) => {
			// Add individual journey entries
			brandData.journey.forEach((entry) => {
				rows.push({
					SessionID: sessionId,
					Brand: brand,
					Page: entry.page,
					'Journey / Time Spent (s)': entry.timeSpent.toFixed(2),
					'Navigated Away By': entry.navigatedAwayBy,
					Timestamp: entry.timestamp,
					Aggregate: '', // Empty for journey rows
					Total: '', // Empty for journey rows
				});
			});

			// Add aggregate time for each page
			Object.entries(brandData.aggregate || {}).forEach(([page, time]) => {
				rows.push({
					SessionID: sessionId,
					Brand: brand,
					Page: page,
					'Journey / Time Spent (s)': '', // Empty for aggregate rows
					'Navigated Away By': '',
					Timestamp: '', // Empty for aggregate rows
					Aggregate: time.toFixed(2),
					Total: '', // Empty for aggregate rows
				});
			});

			// Add total session time row
			rows.push({
				SessionID: sessionId,
				Brand: brand,
				Page: 'TOTAL',
				'Journey / Time Spent (s)': '', // Empty for total row
				'Navigated Away By': '',
				Timestamp: '', // Empty for total row
				Aggregate: '', // Empty for total row
				Total: brandData.total.toFixed(2),
			});
		});
		// Add an empty row for spacing between sessions
		rows.push({}); // Add an empty row for spacing between sessions
		rows.push({
			Brand: '---',
			SessionID: '---',
			Page: '---',
			'Journey / Time Spent (s)': '---',
			'Navigated Away By': '---',
			Timestamp: '---',
			Aggregate: '---',
			Total: '---',
		}); // Add a row indicating a new session
	});

	// Convert array to worksheet
	const worksheet = XLSX.utils.json_to_sheet(rows);

	// Create a new workbook and append the worksheet
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, 'TimeTracking');

	// Generate Excel file and trigger download
	const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
	const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = 'PageMetrics.xlsx';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};
