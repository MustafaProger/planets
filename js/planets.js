export const planets = {
	mercury: {
		name: "Меркурий",
		image: "./img/planets/Mercury.png",
		diameter: {
			km: 4879,
			comparison: "Диаметр Меркурия равен 60 988 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: 167,
			},
			household: {
				item: "🔥",
				description:
					"Средняя оверхность Меркурия достигает 167 °C — горячее, чем цикл самоочистки духовки",
			},
		},
		mass: {
			uranusMass: 0.004,
			comparison: "Масса Меркурия равна 0,004 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 57.9e6,
				au: 0.39,
			},
			period: {
				days: 88,
			},
			airplaneTrips: 1448,
			comparison:
				"Орбита Меркурия равна 1448 кругосветным перелётам на самолёте",
		},
	},

	venus: {
		name: "Венера",
		image: "./img/planets/Venus.png",
		diameter: {
			km: 12104,
			comparison: "Диаметр Венеры равен 151 300 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: 465,
			},
			household: {
				item: "🔥🔥",
				description:
					"Температура на Венере достигает 465 °C — этого достаточно, чтобы расплавить свинец и цинк",
			},
		},
		mass: {
			uranusMass: 0.056,
			comparison: "Масса Венеры равна 0,056 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 108.2e6,
				au: 0.72,
			},
			period: {
				days: 225,
			},
			airplaneTrips: 2705,
			comparison: "Орбита Венеры равна 2705 кругосветным перелётам на самолёте",
		},
	},

	earth: {
		name: "Земля",
		image: "./img/planets/Earth.png",
		diameter: {
			km: 12742,
			comparison: "Диаметр Земли равен 159 275 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: 15,
			},
			household: {
				item: "☕️",
				description: "Средняя температура Земли — 15 °C, как у остывшего кофе",
			},
		},
		mass: {
			uranusMass: 0.069,
			comparison: "Масса Земли равна 0,069 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 149.6e6,
				au: 1,
			},
			period: {
				days: 365.25,
			},
			airplaneTrips: 3740,
			comparison: "Орбита Земли равна 3740 кругосветным перелётам на самолёте",
		},
	},

	mars: {
		name: "Марс",
		image: "./img/planets/Mars.png",
		diameter: {
			km: 6779,
			comparison: "Диаметр Марса равен 84 738 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: -63,
			},
			household: {
				item: "❄️",
				description:
					"Средняя температура на Марсе — -63 °C, холоднее, чем в морозильнике",
			},
		},
		mass: {
			uranusMass: 0.007,
			comparison: "Масса Марса равна 0,007 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 227.9e6,
				au: 1.52,
			},
			period: {
				days: 687,
			},
			airplaneTrips: 5698,
			comparison: "Орбита Марса равна 5698 кругосветным перелётам на самолёте",
		},
	},

	jupiter: {
		name: "Юпитер",
		image: "./img/planets/Jupiter.png",
		diameter: {
			km: 139820,
			comparison:
				"Диаметр Юпитера равен более 1,7 миллионам уложенных смартфонов",
		},
		temperature: {
			celsius: {
				average: -145,
			},
			household: {
				item: "❄️❄️",
				description:
					"Верхние облака Юпитера — -145 °C, холоднее самого холодного места на Земле",
			},
		},
		mass: {
			uranusMass: 21.894,
			comparison: "Масса Юпитера равна 21,894 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 778.3e6,
				au: 5.2,
			},
			period: {
				days: 4333,
			},
			airplaneTrips: 19458,
			comparison:
				"Орбита Юпитера равна 19458 кругосветным перелётам на самолёте",
		},
	},

	saturn: {
		name: "Сатурн",
		image: "./img/planets/Saturn.png",
		diameter: {
			km: 116460,
			comparison:
				"Диаметр Сатурна равен более 1,4 миллионам уложенных смартфонов",
		},
		temperature: {
			celsius: {
				average: -178,
			},
			household: {
				item: "❄️❄️❄️",
				description:
					"Температура на Сатурне — -178 °C, достаточно низкая, чтобы заморозить кислород",
			},
		},
		mass: {
			uranusMass: 6.546,
			comparison: "Масса Сатурна равна 6,546 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 1427e6,
				au: 9.54,
			},
			period: {
				days: 10759,
			},
			airplaneTrips: 35675,
			comparison:
				"Орбита Сатурна равна 35675 кругосветным перелётам на самолёте",
		},
	},

	uranus: {
		name: "Уран",
		image: "./img/planets/Uranus.png",
		diameter: {
			km: 50724,
			comparison: "Диаметр Урана равен 634 050 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: 195,
			},
			household: {
				item: "☠️❄️",
				description:
					"Температура Урана — -195 °C, почти как в условиях криосохранения",
			},
		},
		mass: {
			uranusMass: 1,
			comparison: "Масса Урана равна 1,000 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 2871e6,
				au: 19.18,
			},
			period: {
				days: 30687,
			},
			airplaneTrips: 71775,
			comparison: "Орбита Урана равна 71775 кругосветным перелётам на самолёте",
		},
	},

	neptune: {
		name: "Нептун",
		image: "./img/planets/Neptune.png",
		diameter: {
			km: 49244,
			comparison: "Диаметр Нептуна равен 615 550 уложенным смартфонам",
		},
		temperature: {
			celsius: {
				average: -200,
			},
			household: {
				item: "☠️❄️",
				description: "Температура Нептуна — -200 °C, почти как у жидкого азота",
			},
		},
		mass: {
			uranusMass: 1.176,
			comparison: "Масса Нептуна равна 1,176 массам Урана",
		},
		orbit: {
			distanceFromSun: {
				km: 4497e6,
				au: 30.07,
			},
			period: {
				days: 60190,
			},
			airplaneTrips: 112425,
			comparison:
				"Орбита Нептуна равна 112425 кругосветным перелётам на самолёте",
		},
	},
};
