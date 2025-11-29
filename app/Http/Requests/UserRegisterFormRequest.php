<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterFormRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name'     => 'required|string|max:50',
            'email'    => 'required|string|email|max:50|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ];
    }

}
