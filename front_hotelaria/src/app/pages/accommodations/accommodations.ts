import { Component } from '@angular/core';
import { RoomCard, RoomType } from '../../components/room-card/room-card';

@Component({
  selector: 'app-accommodations',
  imports: [RoomCard],
  templateUrl: './accommodations.html',
  styleUrl: './accommodations.css'
})
export class Accommodations {
  rooms: RoomType[] = [
    {
      name: 'Suites',
      size: '64 m²',
      price: 'R$ 1.500,00',
      description: 'King size bed, living room, walk-in closet, bathtub and voice automation. Curated by Brazilian art and design, the suite is ideal for couples, extended stays, or solo travelers looking for more space. It seats up to three people.',
      images: [
        'assets/rooms/room_suite.png',
        'assets/rooms/suite_bedroom.png',
        'assets/rooms/suite_living.png',
        'assets/rooms/suite_bathroom.png',
        'assets/rooms/room_suite_bath.png',
      ],
      details: [
        'King size bed',
        'Trousseau Trousseau Enxoval',
        'Illy coffee maker',
        'Hawaiian sandals',
        'Private balcony',
        'Living room',
        'Sofa and dining table',
        'Walk-in closet',
        'Bathtub',
        'Designer furniture and works of art',
        '50" smart televisions in two rooms',
        'High-speed Wi-Fi Internet and streaming',
        'Automation with Alexa',
        '24 hour room service',
        'Pack & unpack',
        "Amenities L'Occitane",
        'Early check-in subject to availability',
      ]
    },
    {
      name: 'Deluxe',
      size: '42 m²',
      price: 'R$ 900,00',
      description: 'A spacious room with a queen bed, panoramic city views, and modern amenities. The Deluxe room is designed for guests seeking comfort and style with a touch of luxury. It seats up to two people.',
      images: [
        'assets/rooms/room_deluxe.png',
        'assets/rooms/room_deluxe_view.png',
        'assets/rooms/deluxe_bedroom.png',
        'assets/rooms/deluxe_workspace.png',
        'assets/rooms/deluxe_bathroom.png',
      ],
      details: [
        'Queen size bed',
        'Trousseau Trousseau Enxoval',
        'Illy coffee maker',
        'City view',
        'Desk workspace',
        'Designer furniture and works of art',
        '50" smart television',
        'High-speed Wi-Fi Internet and streaming',
        'Automation with Alexa',
        '24 hour room service',
        "Amenities L'Occitane",
        'Early check-in subject to availability',
      ]
    },
    {
      name: 'Standard',
      size: '28 m²',
      price: 'R$ 600,00',
      description: 'A cozy and elegant room with a queen bed, natural wood furniture, and a bright atmosphere. Perfect for solo travelers or couples looking for a comfortable retreat in the heart of the city.',
      images: [
        'assets/rooms/room_standard.png',
        'assets/rooms/standard_bedroom.png',
        'assets/rooms/standard_bathroom.png',
        'assets/rooms/room_standard_detail.png',
      ],
      details: [
        'Queen size bed',
        'Trousseau Trousseau Enxoval',
        'Illy coffee maker',
        'Natural wood furniture',
        'Reading nook',
        '50" smart television',
        'High-speed Wi-Fi Internet and streaming',
        '24 hour room service',
        "Amenities L'Occitane",
        'Early check-in subject to availability',
      ]
    },
  ];
}
