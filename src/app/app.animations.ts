import { trigger, query, animate, transition, style } from '@angular/animations';

export const routerAnimation =
trigger('routerAnimation', [
	transition('* <=> *', [
		// Initial state of new route
		query(':enter',
			[
				style({ opacity: 0 })
			],
			{ optional:true }
		),
		
		query(':leave',
			[
				style({ opacity: 1 }),
				animate('0.2s', style({ opacity: 0 }))
			],
			{ optional: true }
		),

		query(':enter',
			[
				style({ opacity: 0 }),
				animate('0.2s', style({ opacity: 1 }))
			],
			{ optional: true }
		)
	])
]);
