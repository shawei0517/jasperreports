/*
 * JasperReports - Free Java Reporting Library.
 * Copyright (C) 2001 - 2022 TIBCO Software Inc. All rights reserved.
 * http://www.jaspersoft.com
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft,
 * the following license terms apply:
 *
 * This program is part of JasperReports.
 *
 * JasperReports is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * JasperReports is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with JasperReports. If not, see <http://www.gnu.org/licenses/>.
 */

({
	optimize: 'none',
	baseUrl: '',
	paths: {
		'd3': '../../libraries/d3/d3-5.5.0.min',
		'd3rectangle': 'd3rectangle' 		
	}, 

	wrap: {
		start: "(function(root){\n\nvar define = root.define;\n\n",
		end: "\n\n}(typeof __visualize__ != 'undefined' ? __visualize__ : (typeof __jrio__ != 'undefined' ? __jrio__ : window)));"
	},

	name: "d3rectangle",
	out: "d3rectangle.min.js"
})
