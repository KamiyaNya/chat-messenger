import { Grid } from '@chakra-ui/react';
import NotificationItems from '@/components/resources/notificationItems/NotificationItems';
export default function NotificationPage() {
	return (
			<Grid
				gridTemplateColumns={{ x1170: '5fr 8fr' }}
				gap='36px'
				position='relative'>
				<NotificationItems />
			</Grid>
	);
}
