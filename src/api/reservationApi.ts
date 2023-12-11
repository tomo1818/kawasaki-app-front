import axios from 'axios';
import {
  Reservation,
  CreateReservationDto,
  UpdateReservationDto,
} from '../types/reservationTypes';

// TODO: APIのurlを呼び出す
const apiUrl = 'http://localhost:3001/reservations'; // ここにはバックエンドAPIのURLを設定

export const createReservation = async (data: CreateReservationDto) => {
  return axios.post<Reservation>(`${apiUrl}`, data);
};

export const getReservations = async () => {
  return axios.get<Reservation[]>(`${apiUrl}`);
};

export const getReservationByDate = async (mealDate: string) => {
  return axios.get<Reservation[]>(`${apiUrl}/by-date/${mealDate}`);
};

export const getReservationsByMonthAndUser = async (
  userId: number,
  year: number,
  month: number
) => {
  return axios.get<Reservation[]>(
    `${apiUrl}/by-month/${userId}/${year}/${month}`
  );
};

export const updateReservation = async (
  id: number,
  data: UpdateReservationDto
) => {
  return axios.patch<Reservation>(`${apiUrl}/${id}`, data);
};

export const deleteReservation = async (id: number) => {
  return axios.delete(`${apiUrl}/${id}`);
};
