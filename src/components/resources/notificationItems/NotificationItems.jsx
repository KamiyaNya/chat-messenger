'use client';
import { useEffect, useState } from 'react';
import { Heading, Box, Divider, Skeleton } from '@chakra-ui/react';

import NotificationItem from '@/components/resources/notificationItems/NotificationItem';
import { $api } from '@/utils/axios';
import NotificationInviteToRoomItem from './NotificationInviteToRoomItem';

export default function NotificationItems() {
	const [isLoading, setIsLoading] = useState(false);
	const [notifications, setNotifications] = useState([]);

	const getNotifications = async () => {
		try {
			const { data } = await $api.get('/notifications/get_notifications');
			if (data.success) {
				setNotifications(data.data.notifications);
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getNotifications();
	}, []);

	return (
		<Box
			pl='18px'
			pr='15px'
			pt='20px'
			pb='26px'
			bgColor='#fff'
			boxShadow='0 4px 5px 2px rgba(121, 197, 239, 0.38)'
			borderRadius='25px'>
			<Box>
				<Heading
					as='h2'
					fontSize='30px'
					color='#303030'
					letterSpacing='1.5px'>
					Уведомления
				</Heading>
				<Box
					mt='18px'
					maxHeight='29.5vh'
					height='100%'
					overflow='auto'
					pr='10px'>
					{!isLoading && notifications.length ? (
						notifications.map((notification, index) => (
							<Box key={notification.id}>
								{index !== 0 ? (
									<Divider
										my='15px'
										opacity='1'
										bgColor='rgba(180, 171, 171, 0.66)'
									/>
								) : (
									''
								)}

								{notification.type === 'inviteToRoom' ? (
									<NotificationInviteToRoomItem
										user={notification.user}
										notification={notification.notification}
									/>
								) : (
									<NotificationItem
										user={notification.user}
										notification={notification.notification}
									/>
								)}
							</Box>
						))
					) : !isLoading && !notifications.length ? (
						<Box>У вас нет уведомлений</Box>
					) : (
						Array(5).map((_, index) => {
							return (
								<Skeleton
									key={index + 1}
									width='100%'
									height='60px'></Skeleton>
							);
						})
					)}
				</Box>
			</Box>
		</Box>
	);
}
