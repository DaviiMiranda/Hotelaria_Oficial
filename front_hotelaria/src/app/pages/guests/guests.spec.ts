import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Para criar Observables falsos

import { Guests } from './guests'; // Use o nome da classe 'Guests'
import { guestService, Guest } from '../../services/guest-service';

// --- PASSO 1: Criar o "dublê" do serviço (Mock Service) ---
// Usamos jasmine.createSpyObj para criar um objeto com funções "espiãs"
const mockGuestService = jasmine.createSpyObj('guestService', ['getGuests', 'addGuest', 'deleteGuest']);

// Dados de exemplo para o nosso dublê retornar
const mockGuests: Guest[] = [
  { id: 1, name: 'João Silva', cpf: '11122233344', email: 'joao@email.com', telephone: '85999998888', checkInDate: '2025-10-06', checkOutDate: '2025-10-10', roomNumber: '101' },
  { id: 2, name: 'Maria Souza', cpf: '55566677788', email: 'maria@email.com', telephone: '85988887777', checkInDate: '2025-11-15', checkOutDate: '2025-11-20', roomNumber: '202' }
];


// --- PASSO 2: Configurar o ambiente de teste ---
describe('GuestsComponent', () => {
  let component: Guests;
  let fixture: ComponentFixture<Guests>;
  // Mantemos uma referência ao nosso serviço dublê
  let service: jasmine.SpyObj<guestService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // O componente Guests não é standalone, então o adicionamos em 'declarations'
      // Se fosse standalone, o importaríamos no array 'imports'
      imports: [Guests], 
      providers: [
        // Dizemos ao Angular para injetar nosso dublê sempre que o componente pedir o guestService
        { provide: guestService, useValue: mockGuestService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guests);
    component = fixture.componentInstance;
    
    // Pegamos a instância injetada do nosso dublê
    service = TestBed.inject(guestService) as jasmine.SpyObj<guestService>;

    // Configuramos o retorno padrão do nosso dublê para o método getGuests
    service.getGuests.and.returnValue(of(mockGuests));
  });

  // --- PASSO 3: Escrever os casos de teste ---
  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de hóspedes ao ser inicializado (ngOnInit)', () => {
    // Ação: ngOnInit é chamado automaticamente por detectChanges()
    fixture.detectChanges(); 

    // Asserção: Verificamos se o serviço foi chamado
    expect(service.getGuests).toHaveBeenCalled();

    // Asserção: Verificamos se a propriedade 'guests' do componente foi preenchida com os dados do dublê
    expect(component.guests.length).toBe(2);
    expect(component.guests).toEqual(mockGuests);
  });

  it('deve chamar o serviço para adicionar um novo hóspede e recarregar a lista', () => {
    // Arrange: Configuramos o dublê para o método addGuest
    const newGuest: Guest = { id: 3, name: 'Carlos Pereira', checkInDate: '2025-01-05', checkOutDate: "2025-01-10", cpf: "12350218896", email:"pepepe@gmail.com", roomNumber:"101", telephone:"5863211523" }; // Preencha com dados de exemplo
    service.addGuest.and.returnValue(of(newGuest)); // Simula uma resposta de sucesso

    // Ação: Chamamos o método do componente
    component.addGuest(newGuest);

    // Asserção: Verificamos se o método do serviço foi chamado com os dados corretos
    expect(service.addGuest).toHaveBeenCalledWith(newGuest);
    
    // Asserção: Verificamos se a lista de hóspedes foi recarregada após a adição
    // Ele deve ter sido chamado uma vez em ngOnInit e outra vez após o addGuest
    expect(service.getGuests).toHaveBeenCalledTimes(2); 
  });

  it('deve chamar o serviço para deletar um hóspede e recarregar a lista', () => {
    // Arrange: Configuramos o dublê para o método deleteGuest
    const guestIdToDelete = 1;
    service.deleteGuest.and.returnValue(of(void 0)); // Simula uma resposta de sucesso sem conteúdo

    // Ação: Chamamos o método do componente
    component.deleteGuest(guestIdToDelete);

    // Asserção: Verificamos se o método do serviço foi chamado com o ID correto
    expect(service.deleteGuest).toHaveBeenCalledWith(guestIdToDelete);
    
    // Asserção: Verificamos se a lista de hóspedes foi recarregada após a exclusão
    // Ele deve ter sido chamado uma vez em ngOnInit e outra vez após o deleteGuest
    expect(service.getGuests).toHaveBeenCalledTimes(2);
  });
});