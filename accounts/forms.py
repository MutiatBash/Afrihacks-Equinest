from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth import get_user_model

from allauth.account.forms import SignupForm
class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = (
            # "username",
            # "full_name"
        )

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = get_user_model()
        fields = (
            # "username",
            # "full_name",
        )

class CustomSignupForm(SignupForm):

    phone_number = forms.IntegerField( required=True, label="Phone Number")
    bvn = forms.IntegerField(required=True)
    full_name =  forms.CharField(required=True)

    def save(self, request):

        # Ensure you call the parent class's save.
        # .save() returns a User object.
        user = super(CustomSignupForm, self).save(request)
        user.phone_number = self.cleaned_data["phone_number"]
        user.bvn = self.cleaned_data["bvn"]
        user.full_name = self.cleaned_data["full_name"]

        user.save()
        return user
    
    
    