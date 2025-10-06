import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { guestService, Guest } from './guest-service'; // Use o nome da classe 'guestService' como está no seu arquivo

describe('GuestService', () => {
  let service: guestService;
  let httpTestingController: HttpTestingController;
  const apiUrl = 'http://localhost:8080/api/guests';

  // Dados de exemplo para usar nos testes
  const mockGuests: Guest[] = [
    { id: 1, name: 'João Silva', cpf: '11122233344', email: 'joao@email.com', telephone: '85999998888', checkInDate: '2025-10-06', checkOutDate: '2025-10-10', roomNumber: '101' },
    { id: 2, name: 'Maria Souza', cpf: '55566677788', email: 'maria@email.com', telephone: '85988887777', checkInDate: '2025-11-15', checkOutDate: '2025-11-20', roomNumber: '202' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o módulo de teste para HttpClient
      providers: [guestService]
    });

    // Injeta o serviço e o controlador de teste
    service = TestBed.inject(guestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Garante que não há requisições pendentes após cada teste
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar todos os hóspedes via GET (getGuests)', () => {
    service.getGuests().subscribe(guests => {
      // Espera que os dados recebidos sejam os mesmos que os dados mockados
      expect(guests.length).toBe(2);
      expect(guests).toEqual(mockGuests);
    });

    // Espera que uma única requisição GET tenha sido feita para a URL da API
    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');

    // Responde à requisição com os dados mockados
    req.flush(mockGuests);
  });

  it('deve registrar um novo hóspede via POST (Register)', () => {
    const newGuest: Guest = mockGuests[0];

    service.Register(newGuest).subscribe(response => {
      expect(response).toEqual(newGuest);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('POST');
    // Garante que o corpo da requisição é o objeto do novo hóspede
    expect(req.request.body).toEqual(newGuest);

    req.flush(newGuest);
  });

  it('deve buscar um único hóspede pelo ID via GET (getGuestById)', () => {
    const guestId = 1;
    const mockGuest = mockGuests[0];

    service.getGuestById(guestId).subscribe(guest => {
      expect(guest).toEqual(mockGuest);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/${guestId}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockGuest);
  });

  it('deve atualizar um hóspede via PUT (updateGuest)', () => {
    const guestId = 2;
    const updatedGuest: Guest = { ...mockGuests[1], name: 'Maria Souza Santos' };

    service.updateGuest(guestId, updatedGuest).subscribe(guest => {
      expect(guest.name).toEqual('Maria Souza Santos');
    });

    const req = httpTestingController.expectOne(`${apiUrl}/${guestId}`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatedGuest);

    req.flush(updatedGuest);
  });

  it('deve deletar um hóspede via DELETE (deleteGuest)', () => {
    const guestIdToDelete = 1;

    service.deleteGuest(guestIdToDelete).subscribe(response => {
      // Para o método delete, a resposta geralmente é vazia (null/void)
      expect(response).toBeNull();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/${guestIdToDelete}`);
    expect(req.request.method).toEqual('DELETE');

    // Responde com null para simular uma resposta de sucesso sem conteúdo (204 No Content)
    req.flush(null);
  });
});