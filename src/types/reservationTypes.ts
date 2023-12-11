export interface Reservation {
  reservation_id: number;
  userUserId: number; // Userエンティティからの参照のため
  meal_date: Date;
  breakfast: boolean;
  dinner: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateReservationDto {
  userUserId: number;
  meal_date: Date;
  breakfast: boolean;
  dinner: boolean;
}

export interface UpdateReservationDto {
  breakfast?: boolean;
  dinner?: boolean;
}
