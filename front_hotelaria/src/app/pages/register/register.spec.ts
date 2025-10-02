import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Register } from './register';
import { guestService } from '../../services/guest-service';

describe('Register Component', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;
  let mockGuestService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockGuestService = jasmine.createSpyObj('guestService', ['Register']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, Register],
      providers: [
        FormBuilder,
        { provide: guestService, useValue: mockGuestService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with required fields', () => {
    expect(component.registerForm).toBeDefined();
    const formControls = component.registerForm.controls;
    expect(formControls['checkin']).toBeDefined();
    expect(formControls['checkout']).toBeDefined();
    expect(formControls['name']).toBeDefined();
    expect(formControls['telephone']).toBeDefined();
    expect(formControls['roomType']).toBeDefined();
    expect(formControls['email']).toBeDefined();
    expect(formControls['cpf']).toBeDefined();
  });

  it('should make the form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should make the form valid when all fields are filled correctly', () => {
    component.registerForm.setValue({
      checkin: '2025-10-01',
      checkout: '2025-10-05',
      name: 'John Doe',
      telephone: '1234567890',
      roomType: 'normal',
      email: 'john.doe@example.com',
      cpf: '12345678901'
    });
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('should have an invalid email field if the email format is wrong', () => {
    const emailControl = component.registerForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
  });

  it('should have an invalid cpf field if the cpf pattern is wrong', () => {
    const cpfControl = component.registerForm.get('cpf');
    cpfControl?.setValue('123');
    expect(cpfControl?.valid).toBeFalsy();
  });

  describe('onSubmit', () => {
    beforeEach(() => {
        spyOn(window, 'alert');
    });

    it('should not call guestService.Register if the form is invalid', () => {
      component.onSubmit();
      expect(mockGuestService.Register).not.toHaveBeenCalled();
    });

    it('should call guestService.Register with form data if the form is valid', () => {
      const guestData = {
        checkin: '2024-01-01',
        checkout: '2024-01-05',
        name: 'John Doe',
        telephone: '1234567890',
        roomType: 'single',
        email: 'john.doe@example.com',
        cpf: '12345678901'
      };
      component.registerForm.setValue(guestData);
      mockGuestService.Register.and.returnValue(of({}));
      
      component.onSubmit();

      expect(mockGuestService.Register).toHaveBeenCalledWith(guestData);
    });

    it('should show success alert and navigate on successful registration', () => {
      component.registerForm.setValue({
        checkin: '2024-01-01',
        checkout: '2024-01-05',
        name: 'John Doe',
        telephone: '1234567890',
        roomType: 'single',
        email: 'john.doe@example.com',
        cpf: '12345678901'
      });
      mockGuestService.Register.and.returnValue(of({ success: true }));

      component.onSubmit();

      expect(window.alert).toHaveBeenCalledWith('Hóspede registrado com sucesso!');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/guests']);
    });

    it('should show error alert on failed registration', () => {
      component.registerForm.setValue({
        checkin: '2024-01-01',
        checkout: '2024-01-05',
        name: 'John Doe',
        telephone: '1234567890',
        roomType: 'single',
        email: 'john.doe@example.com',
        cpf: '12345678901'
      });
      mockGuestService.Register.and.returnValue(throwError(() => new Error('Failed registration')));

      component.onSubmit();

      expect(window.alert).toHaveBeenCalledWith('Não foi possível registrar o hóspede. Tente novamente.');
    });
  });
});