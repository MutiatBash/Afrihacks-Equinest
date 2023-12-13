from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import (
SpectacularAPIView,
SpectacularRedocView, 
SpectacularSwaggerView
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/dj-rest-auth/", include("dj_rest_auth.urls")),
    path("api/dj-rest-auth/registration/", 
        include("dj_rest_auth.registration.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/redoc/", SpectacularRedocView.as_view(
        url_name="schema"), name="redoc",),
    path("api/schema/docs/", SpectacularSwaggerView.as_view(
        url_name="schema"), name="swagger-ui"),
]
