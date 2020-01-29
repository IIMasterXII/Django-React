from leads.models import Lead
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        lead = serializer.save(owner=self.request.user)
        account = self.request.user.account
        account.currency = account.currency - lead.amount
        account.save()


